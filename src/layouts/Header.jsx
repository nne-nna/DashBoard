import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../hooks/use-theme';
import { Bell, ChevronsLeft, Moon, Search, Sun, LogOut, Settings, User, X } from 'lucide-react';
import profileImg from '../assets/profile-image.jpg';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useNotification } from '../contexts/NotificationContext';

export const Header = ({ collapsed, setCollapsed }) => {
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();
    const { 
        notifications, 
        removeNotification, 
        markAllAsRead, 
        unreadCount 
    } = useNotification();
    
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    
    const notificationRef = useRef(null);
    const profileRef = useRef(null);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearchResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchValue.trim().length < 2) {
                setSearchResults([]);
                setShowSearchResults(false);
                return;
            }

            setIsSearching(true);
            try {
                const response = await axios.get(`https://dummyjson.com/products/search?q=${searchValue}`);
                setSearchResults(response.data.products.slice(0, 5)); // Limit to 5 results
                setShowSearchResults(true);
            } catch (error) {
                console.error("Error searching products:", error);
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        };

        // Debounce search to avoid too many requests
        const timeoutId = setTimeout(fetchSearchResults, 300);
        return () => clearTimeout(timeoutId);
    }, [searchValue]);

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSelectSearchResult = (result) => {
        // Navigate to products page with the selected product ID in search params
        navigate(`/products?highlight=${result.id}`);
        setShowSearchResults(false);
        setSearchValue('');
    };

    return (
        <header className='relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900'>
            <div className='flex items-center gap-x-3'>
                <button className='btn-ghost size-10' onClick={() => setCollapsed(!collapsed)}>
                    <ChevronsLeft className={collapsed ? "rotate-180" : ""} />
                </button>
                <div className='relative' ref={searchRef}>
                    <div className='input relative'>
                        <Search size={20} className='text-slate-300'/>
                        <input 
                            type='text' 
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder='Search for products' 
                            className='w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-200'
                        />
                        {isSearching && (
                            <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
                            </div>
                        )}
                    </div>
                    
                    {showSearchResults && searchResults.length > 0 && (
                        <div className="absolute left-0 right-0 mt-1 rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                            <div className="max-h-[300px] overflow-y-auto p-1">
                                {searchResults.map((result) => (
                                    <div 
                                        key={result.id} 
                                        className="flex cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-700"
                                        onClick={() => handleSelectSearchResult(result)}
                                    >
                                        <img 
                                            src={result.thumbnail} 
                                            alt={result.title}
                                            className="h-10 w-10 rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{result.title}</p>
                                            <p className="text-xs text-slate-500">${result.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {showSearchResults && searchValue.trim().length >= 2 && searchResults.length === 0 && !isSearching && (
                        <div className="absolute left-0 right-0 mt-1 rounded-lg border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                            <p className="text-center text-sm text-slate-500">No products found</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex items-center gap-x-3'>
                <button 
                    className='btn-ghost size-10' 
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    <Sun size={20} className='dark:hidden'/>
                    <Moon size={20} className='hidden dark:block'/>
                </button>
                <div className="relative" ref={notificationRef}>
                    <button 
                        className='btn-ghost size-10 relative' 
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <Bell size={20} />
                        {unreadCount > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                            <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-700">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Notifications</h3>
                                <button 
                                    onClick={markAllAsRead}
                                    className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400"
                                >
                                    Mark all as read
                                </button>
                            </div>
                            <div className="max-h-[300px] overflow-y-auto">
                                {notifications.length > 0 ? (
                                    notifications.map((notification) => (
                                        <div 
                                            key={notification.id} 
                                            className={`flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-700 ${
                                                !notification.read ? 'bg-blue-50 dark:bg-slate-700/50' : ''
                                            }`}
                                        >
                                            <div>
                                                <p className="text-sm text-slate-900 dark:text-slate-100">{notification.message}</p>
                                                <p className="text-xs text-slate-500">{notification.time}</p>
                                            </div>
                                            <button 
                                                onClick={() => removeNotification(notification.id)}
                                                className="text-slate-400 hover:text-slate-600"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center p-6">
                                        <Bell size={40} className="mb-2 text-slate-300" />
                                        <p className="text-center text-sm text-slate-500">No notifications</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative" ref={profileRef}>
                    <button 
                        className='size-10 overflow-hidden rounded-full'
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        <img 
                            src={profileImg} 
                            alt='profile image'
                            className='size-full object-cover'
                        />
                    </button>
                    {showProfile && (
                        <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                            <div className="border-b border-slate-200 p-4 dark:border-slate-700">
                                <p className="font-semibold text-slate-900 dark:text-slate-100">Nancy Gold</p>
                                <p className="text-sm text-slate-500">nancygold@mail.com</p>
                            </div>
                            
                            <div className="p-2">
                                <Link to="/profile" className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
                                    <User size={16} />
                                    Profile
                                </Link>
                                <button className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
                                    <Settings size={16} />
                                    <Link to='/settings'>Settings</Link>
                                </button>
                                <button className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-slate-100 dark:text-red-400 dark:hover:bg-slate-700">
                                    <LogOut size={16} />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};

export default Header;