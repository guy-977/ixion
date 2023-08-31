import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className='text-center text-bold text-2xl p-3'>
          Ixion
        </h1>
        <p className='text-center text-md'>Perform Pentesting in your softwares, without bieng pentester</p>
      </div>
    </main>
  )
}
