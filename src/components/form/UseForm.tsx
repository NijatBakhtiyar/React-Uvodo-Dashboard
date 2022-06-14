import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../button/Button";
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
    // console.log(data);
    reset();
  };

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <label>Name</label>
          <input
            defaultValue="Cash on delivery (COD)"
            {...register("name")}
          />
        </div>

        <div className="formGroup">
          <label>Delivery methods</label>
          <input {...register("methods", { required: true })} />
        </div>
        {errors.methods && <span>This field is required</span>}

        <div className="formGroup">
          <label>Payment instruction (Optional)</label>
          <textarea
            {...register("intructions")}
            cols={10}
            rows={6}
          />
        </div>

        <div className="btn">
          <Button>
            <span>Save changes </span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UseForm;
