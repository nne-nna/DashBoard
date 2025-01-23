import PropTypes from 'prop-types';

export const Header = ({ collapse, setCollapsed }) => {
    return <header className='relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900 '>Header</header> ;
};

Header.PropTypes = {
    collapse: PropTypes.bool,
    setCollapsed: PropTypes.func,
} 
 