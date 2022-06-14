import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../button/Button";
import { FormCss } from "./FormStyle";
type Inputs = {
  name: string;
  methods: string;
  intructions: string;
};

const Form = () => {
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
    <FormCss>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <label>Name</label>
          <input
            defaultValue="Cash on delivery (COD)"
            {...register("name")}
            data-testid="name-input"
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
            data-testid="intructions-input"
          />
        </div>

        <div className="btn">
          <Button>
            <span>Save changes </span>
          </Button>
        </div>
      </form>
    </FormCss>
  );
};

export default Form;
