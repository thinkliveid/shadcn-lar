import { Link } from '@inertiajs/react'
import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { SignUpForm } from './components/sign-up-form'
import SocialButtons from '../components/social-buttons'

export default function SignUp() {
  return (
    <AuthLayout title={"Create an account"}>
      <Card className='p-6'>
        <div className='mb-2 flex flex-col space-y-2 text-left'>
          <h1 className='text-lg font-semibold tracking-tight'>
            Create an account
          </h1>
          <p className='text-sm text-muted-foreground'>
            Enter your email and password to create an account. <br />
            Already have an account?{' '}
            <Link
              href={route('login')}
              className='underline underline-offset-4 hover:text-primary'
            >
              Login
            </Link>
          </p>
        </div>
        <SignUpForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          By creating an account, you agree to our{' '}
          <a
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href='/privacy'
            className='underline underline-offset-4 hover:text-primary'
          >
            Privacy Policy
          </a>
          .
        </p>
        <SocialButtons isLoading={false} />
      </Card>
    </AuthLayout>
  )
}
