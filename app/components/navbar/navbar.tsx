import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'

export async function NavBar() {
  const session = await getServerSession(authOptions)

  return (
    <nav className='flex justify-between items-start'>
      <Link href='/'>
        <h1 className='font-bold text-3xl'>Wype</h1>
      </Link>

      <div className='flex gap-6'>
        {/* <button className='bg-[var(--bg-btn)] hover:bg-[var(--bg-btn-hover)]'>
          <span className='capitalize'>create new</span>
        </button> */}

        {session ? (
          <Link
            href={'/settings/theme'}
            className='flex items-center gap-2 p-2 px-3 rounded-lg hover:bg-gray-300/30 transition-colors'>
            <img
              src={session?.user?.image ?? ''}
              alt={session?.user?.name ?? ''}
              className='rounded-full h-8'
            />
            <span className='text-sm font-semibold'>{session?.user?.name}</span>
          </Link>
        ) : (
          <Link
            href='/api/auth/signin'
            className='px-4 py-2 rounded-lg bg-[var(--primary)] font-semibold hover:bg-[var(--primary-hover)] transition-colors'>
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
