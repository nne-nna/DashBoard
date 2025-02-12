import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../hooks/use-theme';
import { Bell, ChevronsLeft, Moon, Search, Sun, LogOut, Settings, User, X } from 'lucide-react';
import profileImg from '../assets/profile-image.jpg';
import PropTypes from 'prop-types';

export const Header = ({ collapsed, setCollapsed }) => {
    const { theme, setTheme } = useTheme();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [notifications, setNotifications] = useState([
        { id: 1, message: "New order received", time: "5 minutes ago", read: false },
        { id: 2, message: "Server update completed", time: "1 hour ago", read: false },
        { id: 3, message: "New user registration", time: "2 hours ago", read: true }
    ]);
    
    const notificationRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        // You can implement search logic here
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    };

    const removeNotification = (id) => {
        setNotifications(notifications.filter(notif => notif.id !== id));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <header className='relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900'>
            <div className='flex items-center gap-x-3'>
                <button className='btn-ghost size-10' onClick={() => setCollapsed(!collapsed)}>
                    <ChevronsLeft className={collapsed ? "rotate-180" : ""} />
                </button>
                <div className='input'>
                    <Search size={20} className='text-slate-300'/>
                    <input 
                        type='text' 
                        value={searchValue}
                        onChange={handleSearch}
                        placeholder='Search for something' 
                        className='w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-200'
                    />
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
                                {notifications.map((notification) => (
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
                                ))}
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
                                <p className="font-semibold text-slate-900 dark:text-slate-100">John Doe</p>
                                <p className="text-sm text-slate-500">admin@example.com</p>
                            </div>
                            <div className="p-2">
                                <button className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
                                    <User size={16} />
                                    Profile
                                </button>
                                <button className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
                                    <Settings size={16} />
                                    Settings
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