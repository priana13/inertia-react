import { Link, useForm } from "@inertiajs/react";

import { Input } from 'tw-elements';


export default function Show({user}){

   
    return (
    <>
     
        <div className="container mx-12 mt-5">    




                <div
                    className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
                    
                    <h2 className="text-2xl mb-6"> Nama:  {user.name} </h2>
                    <h2 className="text-2xl mb-6"> Email:  {user.email} </h2>
                    <h2 className="text-2xl mb-6"> ID:  {user.id} </h2>

                    <form > 

                    
                        <Link                      
                        href="/users"
                        className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        Kembali
                        </Link>
                    </form>
                </div>



            </div>  

    </>
    );
}