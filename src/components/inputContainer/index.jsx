import Button from "../button";
import Input from "../input";

const InputContainer = ()=>{
    return (
        <>
            <div className="input-task">
                <Input tipo={'text'}></Input>
                <Button title ='ADD' clase={'input-task-button'}></Button>
            </div>
        </>)
}

export default InputContainer;