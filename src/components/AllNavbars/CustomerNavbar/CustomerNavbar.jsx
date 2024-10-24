import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

import getCustomerData from '../../../services/customer/getCustomerData';
import profilepic from "../../../assets/funcionario/perfil.png";
import Loading from '../../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const CustomerNavbar=()=> {
  const navigation = [
    { name: 'Meus Tickets', href: '/Create-Ticket', current: true },
    { name: 'Central de Ajuda', href: '/central-de-ajuda', current: false },
    { name: 'FAQ', href: '/Perguntas-Frequentes', current: false },
    
  ]
  const [username, setUsername] = useState("");
  const navigate = useNavigate();


  const getCustomerInfo = async()=>{
    try{
      let name = await getCustomerData(sessionStorage.getItem("userId"))
      if(name){
        sessionStorage.setItem("username",name)
        setUsername(name);
      }
    }catch(error){
      console.log(error)
    }
  }

  const getUsername = () => {
    setUsername(sessionStorage.getItem("username"))
  }

  useEffect(() => {
    getUsername();
    getCustomerInfo();
  }, []);
  
  const handleLogoutClick = () => {
    
    sessionStorage.clear()
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  if (!username) {
    <Loading />
  }
  
  return (
    <Disclosure as="nav" className="bg-greenh">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"> 
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white  hover:bg-greene focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:border-greene">
              <span className="absolute -inset-0.5" />
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ">
             <h1 className='text-white pb-1 text-lg cursor-pointer' onClick={() => navigate("/clienteHome")}>WayClient</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4 text-white mt-5">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    // href={item.href}
                    onClick={() => navigate(item.href)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'hover:bg-greene hover:bg-opacity-20 text-white hover:text-white' : 
                      ' hover:bg-greene hover:bg-opacity-20 hover:text-white text-white',
                      ' rounded-md px-3 py-2 text-sm font-bold text-nowrap cursor-pointer',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
           
              <input type='search' className='hidden sm:block md:w-full h-10 m-5 text-greene px-2 py-1 rounded-3xl outline-0 focus:border-greene  focus:ring-1 focus:ring-greene  sm:text-sm sm:leading-6 shadow-md shadow-greene' placeholder=" pesquisar" />
                
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
       
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-2">
              <div className='flex items-center space-x-2'>
                <MenuButton className="relative p-0 flex rounded-full bg-greene  sm:mr-0 hover:border-greene text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-greene hover:ring-offset-greene">
                 <span className="absolute -inset-1.5" />
                 <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={profilepic}
                    className="h-10 w-10 rounded-full"
                  />  
                </MenuButton>
                <p className='text-white hidden sm:block'>{sessionStorage.getItem("username")}</p>
              </div>
              <MenuItems
                transition
                className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-greene text-white  py-1 shadow-lg ring-1 ring-greenh ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:text-greenh ">
                    Seu Perfil
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-white  hover:text-greenh">
                  Configurações
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="" onClick={handleLogoutClick} className="block px-4 py-2 text-sm text-white  hover:text-greenh">
                    Sair
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' text-white hover:text-greene' : ' hover:text-greene text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}


export default CustomerNavbar;