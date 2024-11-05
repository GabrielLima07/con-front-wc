import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import getEmployeeData from '../../../services/employee/getEmployeeData';
import profilepic from "../../../assets/funcionario/perfil.png";
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import getCustomerName from '../../../services/customer/getCustomerName';
import { CustomerPerfilContext } from '../../context/CustomerPerfilContext';



const EmployeeNavbar = () => {
  const navigation = [
    { name: 'Tickets', href: '/department-tickets', current: true },
    { name: 'Mensagens', href: '', current: false },
    { name: 'Histórico', href: '', current: false },
  ]

 
  const [searchTerm, setSearchTerm] = useState("");
  const [customers, setCustomers] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  const navigate = useNavigate();
  const getEmployeeInfo = async() => {
    const userId = sessionStorage.getItem("userId")
    try {
      if (!userId) {
        console.log("Id do usuário não encontrado na sessionStorage.");
        return;
      }

        let name = await getEmployeeData(sessionStorage.getItem("userId"))
        if (name) {
            sessionStorage.setItem("username", name)
            setUsername(name);
        }
    } catch (error) {
        console.log(error)
    } finally {
      setLoading(false)
    }
  };
  
  const handleCustomerClick = (customer) => {
    
    sessionStorage.setItem("selectedCustomer", JSON.stringify(customer));
    
    // Navegar para o perfil do cliente
    navigate(`/profile/${customer.id}`);
   
  };
  
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      
      setCustomers([]); 
      return;
    }
    
    try {
      const data = await getCustomerName(searchTerm);
      setCustomers(data);
      console.log(data);
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  };

  
  useEffect(() => {
    getUsername();
    getEmployeeInfo();
    
  }, []);
  
  const handleLogoutClick = () => {
    sessionStorage.clear()
  }
  
  const getUsername = () => {
    setUsername(sessionStorage.getItem("username"))
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

   if (!username) {
     <Loading />
  }
  
  return (
    <CustomerPerfilContext.Provider value={customers}>
      <Disclosure as="nav" className="bg-greenh">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white  hover:bg-greene focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:border-greene">
                <span className="absolute -inset-0.5" />
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="flex flex-shrink-0 items-center ">
              <h1 onClick={() => navigate("/funcionario")} className='text-white pb-1 text-lg'>WayClient</h1>
              </div>
              <div className="hidden md:ml-6 md:block ">
                <div className="flex space-x-4 text-white mt-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => navigate(`${item.href}`)}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'hover:bg-greene hover:bg-opacity-20 text-white hover:text-white' : 
                        ' hover:bg-greene hover:bg-opacity-20 hover:text-white text-white',
                        ' rounded-md px-3 py-2 text-sm font-bold cursor-pointer',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>   
              <div className='hidden md:block md:w-full text-greene mr-5 outline-0'>
              <input
          type="search"
          className="hidden md:block md:w-full text-greene px-2 py-1 rounded-t-md m-2 mb-0 outline-0 focus:border-greene focus:ring-1 focus:ring-greene sm:text-sm sm:leading-6 shadow-md shadow-greene"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setDropdownVisible(true)} // mostra a lista ao focar no input
          onBlur={() => setDropdownVisible(false)} // oculta a lista ao desfocar
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        {isDropdownVisible && customers.length > 0 && (
          <ul className="absolute ml-2 max-h-60 rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            {customers.map((customer) => (
              <li
                key={customer.id}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-green-100"
                onMouseDown={() => handleCustomerClick(customer)}
              >
                <span className="font-normal block truncate">
                  {customer.name}, {customer.email}
                </span>
              </li>
            ))}
          </ul>
        )}
              </div>    
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-greene p-1 text-white border-greene hover:text-white hover:border-greene focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-greene"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6 " />
              </button>

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
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-white  hover:text-greenh">
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="" onClick={handleLogoutClick} className="block px-4 py-2 text-sm text-white  hover:text-greenh">
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
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
    </CustomerPerfilContext.Provider>
  )
}


export default EmployeeNavbar;