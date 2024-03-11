import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

function GitHub() {
    
    const data = useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hellokeyur`)
    //     .then(res=>res.json())
    //     .then(res=>setData(res));
    // },[]);

    return (
        <>
            <h4 className='text-center mt-8'>Author GitHub Details</h4>
            <section className="pb-16 bg-blueGray-50">
            <div className="w-full lg:w-4/12 px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                        <img alt={data.name} src={data.avatar_url} className="shadow-xl rounded-full h-auto align-middle border-none h-16 w-16" />
                    </div>
                    </div>
                    <div className="w-full px-4 text-center mt-4">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {data.followers}
                        </span>
                        <span className="text-sm text-blueGray-400">Followers</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {data.following}
                        </span>
                        <span className="text-sm text-blueGray-400">Following</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {data.public_repos}
                        </span>
                        <span className="text-sm text-blueGray-400">Public Repos.</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {data.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {data.location}
                    </div>
                    
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {data.bio}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>

        </>
    )
}

export default GitHub