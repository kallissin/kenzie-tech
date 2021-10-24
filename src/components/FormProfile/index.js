import { Form } from "./styles";

import { Button } from "../Button";
import { useContext } from "react";
import { UserContext } from "../../providers/users";

import { useForm } from "react-hook-form";

const FormProfile = ({ edit, setEdit }) => {
  const { register, handleSubmit } = useForm();

  const { user, updateUser } = useContext(UserContext);

  const handleSubmitFunction = (data) => {
    console.log(data);
    updateUser(data);
    setEdit(!edit);
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitFunction)}>
      <div>
        <input
          className="form-input"
          type="text"
          defaultValue={user.name}
          placeholder="Name"
          {...register("name")}
        />
      </div>
      <div>
        <input
          className="form-input"
          type="text"
          defaultValue={user.email}
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <div>
        <input
          className="form-input"
          type="text"
          defaultValue={user.contact}
          placeholder="Contact"
          {...register("contact")}
        />
      </div>
      <div>
        <textarea
          className="form-input"
          type="text"
          defaultValue={user.bio}
          placeholder="Bio"
          {...register("bio")}
        />
      </div>
      <div>
        <Button type="submit">Salvar</Button>
      </div>
    </Form>
  );
};

export default FormProfile;
