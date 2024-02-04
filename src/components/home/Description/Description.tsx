import Image from "next/image"

export const Description = () => {
  return (
    <section className="grid grid-cols-2 max-w-5xl my-24 mx-auto  rounded-3xl gap-8 p-8">
      <Image className="object-cover h-[300px] w-[500px] rounded-lg shadow-xl shadow-white/5" src='/images/description.jpeg' alt="product marketplace" width={500} height={300} priority={true}/>
      <div>
        <h2 className="text-4xl font-semibold text-secondary m-0 mb-5">Description</h2>
        <p className="text-2xl text-colorT">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam officiis asperiores ut animi expedita dolorum modi eum repellendus ipsum error quos explicabo soluta, mollitia voluptate saepe sint at repudiandae itaque.</p>
      </div>
    </section>
  )
}
