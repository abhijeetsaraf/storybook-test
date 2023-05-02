import Radio from "../components/Radio";

export default{
    title:"Components/Radio button",
    component: Radio,
}

const Template = args => <Radio {...args}/>

export const radioButtonSmall = Template.bind({})
radioButtonSmall.args = {
    label: "Button",
    size: "sm",
}

export const radioButtonMedium = Template.bind({})
radioButtonMedium.args = {
    label: "Button",
    size: "md",
}

export const radioButtonLarge = Template.bind({})
radioButtonLarge.args = {
    label: "Button",
    size: "lg",
}