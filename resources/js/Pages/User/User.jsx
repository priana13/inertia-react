import { Link, Head, usePage } from '@inertiajs/react';
import { useEffect , useState } from 'react';

import { Input } from 'tw-elements';

import { useForm } from "@inertiajs/react";


export default function User({users}){
    

    const {flash} = usePage().props;

    const {component} = usePage();

    const [flashMessage , setFlashMessage]  = useState(flash.message);
    

    console.log( useForm() )

    return (

        <>
            <div className="container mx-12 mt-5 flex justify-between">

                <h2 className="text-2xl">Halaman User</h2>

               <Head title="Halaman User" >  
               
               <meta head-key="description" name="description" content="This is a page specific description" />

                </Head>                 

                <Link
                href="/users/create"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Create
                </Link>


            </div>    

            {flash.message && (

                <div className="text-danger container mx-12 bg-gray-100 p-2 my-2">{flash.message}</div>
            )}   

            {flash.success && (

                <div className="text-success container mx-12 bg-gray-100 p-2 my-2">{flash.success}</div>
            )}                 

            <div className="flex flex-col mx-12">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                        className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                        <thead
                            className="border-b border-neutral-200 font-medium dark:border-white/10">
                            <tr>
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.map( user => (                           
                            
                                <tr className="border-b border-neutral-200 dark:border-white/10" key={`data-${user.id}`}>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                    <td className="whitespace-nowrap py-4 flex">
                                    <Link
                                        key={`show-${user.id}`}
                                        href={'users/' + user.id}
                                        className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                                        Show
                                    </Link>     

                                    <Link
                                        key={`edit-${user.id}`}
                                        href={'users/' + user.id + '/edit'}
                                        className="ms-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                                        Edit
                                    </Link>                                  


                                    <Link                                          
                                        href={`/users/${user.id}`}
                                        key={`delete-${user.id}`}  
                                        method="DELETE"      
                                        as="button"                                   
                                        className="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mx-2">
                                        Delete
                                    </Link> 


                                    </td>
                                </tr>

                          ) )}                        

                         
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>

                <div className="my-6 mx-auto">


                    {/* <!-- First navigation component with larger text and padding --> */}
                    <nav aria-label="Page navigation example">
                        {/* <!-- Unordered list container with flex display and no list style --> */}
                        <ul className="list-style-none flex">
                            {/* <!-- Previous button (disabled) --> */}
                           
                            {users.links.map(link => (<>

                                <li  key={`link-${link.label}`}>
                                    <Link
                                        key={link.label}
                                        className="relative block rounded bg-transparent px-5 py-3 text-lg text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                                        href={link.url}                                       
                                        dangerouslySetInnerHTML={{ __html:link.label }}
                                        />
                                        
                                </li>

                            </>))}   
                           
                          
                        </ul>
                    </nav>

                </div>             
              


            </div>
        
          
            
        </>
    )

}