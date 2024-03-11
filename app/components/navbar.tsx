import Link from 'next/link'

export function NavBar() {
  return (
    <nav className='flex justify-between items-center py-6'>
      <Link href='/'>
        <h1 className='font-bold text-3xl'>Wype</h1>
      </Link>

      <Link
        href={'/login'}
        className='px-4 py-2 rounded-lg bg-[var(--primary)] font-semibold hover:bg-[var(--primary-hover)] transition-colors'>
        Login
      </Link>
    </nav>
  )
}
