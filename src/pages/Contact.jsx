import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const onSubmit = (form) => {
    setIsLoading(true);
    setCurrentAnimation('hit')
    const templateParams = {
      from_name: form.name,
      to_name: "Aziz",
      from_email: form.email,
      to_email: "Aziz.fre9@gmail.con",
      message: form.message,
    }
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        
        templateParams,

        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
       
        
      )
      .then(() => {
        setIsLoading(false);
        setTimeout(()=>{
          setCurrentAnimation('idle')
        },[3000])
        reset(); // Reset the form after a successful submission
      })
      .catch((error) => {
        setIsLoading(false);
        setTimeout(() => {
          currentAnimation("idle");
          
        }, [3000]);
        console.error("EmailJS Error:", error);
        alert("An error occurred, please try again later.");
      });
  };
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className="flex flex-col flex-1 min-w-[50%]">
        <h1 className="head-text">Get in touch</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-7 mt-14">
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              className='input'
              placeholder='John'
              {...register('name', { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            
          </label>
          
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              {...register("email", {
                required: true,
                pattern:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
              })}
              aria-invalid={errors.email ? "true" : "false"}
              className='input'
              placeholder='John@gmail.com'
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
           
          </label>
          
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              rows={4}
              className='textarea'
              placeholder='Write your thoughts here...'
              {...register('message', { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            
          </label>
         
          <button
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
        
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
          <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
