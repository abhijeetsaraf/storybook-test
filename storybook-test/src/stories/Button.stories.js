import Button from "../components/Button"

export default{
    title: "Button",
    component: Button,
}
//Import the button component in the storybook page
//Export a default object in storybook 

export const Red = () => <Button label="Press me" backgroundColor = "blue"/>