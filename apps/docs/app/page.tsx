import dayjs from 'dayjs'

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <h1>Srcube Taro</h1>
      </main>
      <footer className="flex place-content-center py-6">
        <p className="text-sm opacity-40">
          ©
          {dayjs().year()}
          {' '}
          Srcube
        </p>
      </footer>
    </>
  )
}
