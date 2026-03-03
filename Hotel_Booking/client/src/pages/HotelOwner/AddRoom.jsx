import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })

    const [inputs, setInputs] = useState({
        roomType: '',
        pricePerNight: 0,
        amenities: {
            'Free Wifi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false,
        }
    })

    return (
        <form className="pb-40 max-w-3xl pt-1 px-2">
            <Title
                align='left'
                font='outfit'
                title='Add Room'
                subTitle="Fill in the details carefully and accurate room details, pricing and amenities to enhance the user booking experience."
            />

            {/* Upload Area For Images */}
            <p className='text-gray-800 mt-10'>Images</p>
            <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
                {Object.keys(images).map((key) => (
                    <label htmlFor={`roomImage${key}`} key={key}>
                        <img
                            className='max-h-13 cursor-pointer opacity-80'
                            src={
                                images[key]
                                    ? URL.createObjectURL(images[key])
                                    : assets.uploadArea
                            }
                            alt=""
                        />
                        <input
                            type="file"
                            accept='image/*'
                            id={`roomImage${key}`}
                            hidden
                            onChange={e =>
                                setImages({
                                    ...images,
                                    [key]: e.target.files[0]
                                })
                            }
                        />
                    </label>
                ))}
            </div>

            {/* Form Section */}
            <div className='w-full mt-4'>

                {/* Room Type + Price */}
                <div className='flex max-sm:flex-col gap-6'>

                    <div className='flex-1'>
                        <p className='text-gray-800 mt-4'>Room Type</p>
                        <select
                            value={inputs.roomType}
                            onChange={e => setInputs({ ...inputs, roomType: e.target.value })}
                            className='border border-gray-300 rounded px-3 py-2 mt-1'
                        >
                            <option value="">Select Room Type</option>
                            <option value="Single Bed">Single Bed</option>
                            <option value="Double Bed">Double Bed</option>
                            <option value="Luxury Room">Luxury Room</option>
                            <option value="Family Suite">Family Suite</option>
                        </select>
                    </div>

                    <div className='flex-1'>
                        <p className='mt-4 text-gray-800'>
                            Price <span className='text-xs'>/night</span>
                        </p>
                        <input
                            type="number"
                            placeholder='0'
                            value={inputs.pricePerNight}
                            onChange={e => setInputs({ ...inputs, pricePerNight: e.target.value })}
                            className='border border-gray-300 rounded px-3 py-2 mt-1 w-40'
                        />
                    </div>

                </div>

                {/* Amenities */}
                <div className='mt-6'>
                    <p className='text-gray-800'>Amenities</p>
                    <div className='flex flex-col gap-2 mt-2 text-gray-600 max-w-sm'>
                        {Object.keys(inputs.amenities).map((amenity, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={`amenities${index}`}
                                    checked={inputs.amenities[amenity]}
                                    onChange={() =>
                                        setInputs({
                                            ...inputs,
                                            amenities: {
                                                ...inputs.amenities,
                                                [amenity]: !inputs.amenities[amenity]
                                            }
                                        })
                                    }
                                />
                                <label htmlFor={`amenities${index}`} className="ml-2">
                                    {amenity}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer'
                >
                    Add Room
                </button>

            </div>
        </form>
    )
}

export default AddRoom