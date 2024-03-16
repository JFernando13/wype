import { BtnLogin } from '@/components/buttons'
import { GoogleIcon } from '../components/icons/google'

export default function LoginPage() {
  return (
    <section className='flex flex-col gap-4'>
      <BtnLogin>
        <GoogleIcon />
        <span>sign in with google</span>
      </BtnLogin>
    </section>
  )
}
