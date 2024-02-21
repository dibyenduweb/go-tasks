import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTasks = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit,reset} = useForm();
  
  const dispatch = useDispatch()

const onCancel = () => {
reset();
setIsOpen(false);
}

  const onSubmit = (data) => {
    
    dispatch(addTask(data))
    onCancel()
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="test">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-wull rounded-md"
            type="text"
            id="title"
            {...register("name")}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            className="w-wull rounded-md"
            type="text"
            id="desciption"
            {...register("description")}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            className="w-wull rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-wull rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Dibyendu" defaultValue>
              Dibyendu
            </option>
            <option value="Tanmaoy">Tanmaoy</option>
            <option value="Subha">Subha</option>
            <option value="Shakil">Shakil</option>
          </select>
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-wull rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option value="High" defaultValue>
              High
            </option>
            <option value="Medium">Medium</option>
            <option value="low">low</option>
          </select>
        </div>

        <div className="flex gap-3 justify-end">
          <button onClick={()=>onCancel()} type="button" className="btn btn-danger">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default AddTasks;
