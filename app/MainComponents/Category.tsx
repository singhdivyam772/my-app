"use client"; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const categories_url = 'https://fakestoreapi.com/products/categories';

const Category = () => {
    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
        try {
            const response = await axios.get(categories_url);
            const jsonData = response.data;
            setCategories(jsonData);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    console.log(categories);

    const categoryImages = [
        { name: "men's clothing", url: 'https://res.cloudinary.com/drj0uehgx/image/upload/v1716962152/E-CommerceAssignment/mens-category_xqemzy.jpg' },
        { name: "women's clothing", url: 'https://res.cloudinary.com/drj0uehgx/image/upload/v1716962152/E-CommerceAssignment/women-category_lm5zi1.jpg' },
        { name: "electronics", url: 'https://res.cloudinary.com/drj0uehgx/image/upload/v1716962152/E-CommerceAssignment/electronincs_vhvlk8.png' },
        { name: "jewelery", url: 'https://res.cloudinary.com/drj0uehgx/image/upload/v1716962151/E-CommerceAssignment/jwellery_tgalzq.webp' }
    ];

    const getImageForCategory = (category:any) => {
        const categoryImage = categoryImages.find(img => img.name === category);
        return categoryImage ? categoryImage.url : '';
    };

    return (
        <main>
            <section className='flex flex-col'>
                <h1 className='text-2xl'>Category</h1>
                <div className='flex justify-center items-start md:flex-row gap-5 flex-col my-3'>
                    {categories.map((category, index) => (
                        <div 
                            key={index}
                            className='flex flex-col justify-center items-center w-[16rem] h-[14rem] rounded-md shadow-lg'
                        >
                            <p className='mt-4 font-lg font-medium uppercase py-2'>{category}</p>
                            <div className='aspect-w-1 aspect-h-1 w-[80%] h-[70%] transition-all duration-500 cursor-pointer hover:scale-105'>
                                <img 
                                    src={getImageForCategory(category)} 
                                    alt={category} 
                                    className='object-cover w-full h-full overflow-hidden'    
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Category;
