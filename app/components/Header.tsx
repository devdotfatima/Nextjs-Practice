import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>NextJs</Link>
        </div>
        <div className='links'>
          <Link href='/reposCSR'>Repository CSR</Link>
          <Link href='/repos'>Repos SSR</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;