import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "./UseFormStyle";
type Inputs = {
  name: string;
  methods: string;
  intructions: string;
};

const UseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="formGroup">
          <label>Name</label>
          <input
            defaultValue="Cash on delivery (COD)"
            {...register("name")}
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="formGroup">
          <label>Delivery methods</label>
          <input {...register("methods", { required: true })} />
        </div>

        <div className="formGroup">
          <label>Payment instruction (Optional)</label>
          <textarea
            {...register("intructions")}
            cols={10}
            rows={6}
          />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.methods && <span>This field is required</span>}

        <div className="btn">
          <button type="submit">Save changes</button>
        </div>
      </form>
    </Form>
  );
};

export default UseForm;
