import dayjs from 'dayjs'

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-screen-xl w-full">
        <div className="grid grid-cols-12 gap-8 py-12">
          <div className="col-span-7">
            <h1 className="mt-12 text-5xl font-medium leading-[1.2]">
              <p>
                Modular and extensible&nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-500 via-primary-500 to-primary-500">
                  UI library
                </span>
                &nbsp;for Taro.js
              </p>
            </h1>
            <p className="mt-6 text-xl text-content4">
              Powered by React UI and Tailwind CSS, build mini apps with atomic design pattern.
            </p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </main>
      <footer className="flex place-content-center py-6">
        <p className="text-sm opacity-40">
          ©&nbsp;
          {dayjs().year()}
          &nbsp;Srcube
        </p>
      </footer>
    </>
  )
}
