import { Disclosure } from '@headlessui/react'

const Projects = () => {
     return (
    <div className="w-full px-4">
        <span className='text-lg'>Proyectos</span>
      <div className="mx-auto w-full max-w-md p-2">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <div className="border-b-2 border-b-white-500">
              <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-white">
                <span>Sistema Escolar</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                Foto
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <div className="border-b-2 border-b-white-500">
              <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-white">
                <span>Tienda Online</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                Foto
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <div className="border-b-2 border-b-white-500">
              <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-white">
                <span>Proyectos Vtex IO</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                foto
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
export default Projects