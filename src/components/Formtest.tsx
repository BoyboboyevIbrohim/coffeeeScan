import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

type Inputs ={
    userNumber: number,
    userName: String
}


const Formtest = () => {
    const {register, handleSubmit, watch, formState:{errors}} =useForm<Inputs>()

    const emailValue = watch("userName")

    const onSubmit: SubmitHandler<Inputs> =(data)=>{
        console.log(data);
        
    }
  return (
    <div>
        <form action="?" onSubmit={handleSubmit(onSubmit)}>
            {errors.userName && <p style={{color: "red"}}>{errors.userName.message}</p>}
            <p>kiritilgan email: {emailValue}</p>
            <label>Ismingiz</label>
            <input {...register("userName", {required:"Email kiritish majburiy", },  )} type="email" name="" id="" />
            <label>Nomeringiz</label>
            <input {...register("userNumber", {required:"Email kiritish majburiy", minLength:8, maxLength:12} )} type="text" name="" id="" />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Formtest