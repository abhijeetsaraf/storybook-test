import TextInput from "../components/TextInput";

export default{
    title: "Components/TextInput",
    component: TextInput,
}

const Template = args => <TextInput {...args}/>

export const textInputSmall = Template.bind({})
textInputSmall.args = {
    label: "Title",
    size:"sm"
}

export const textInputMedium = Template.bind({})
textInputMedium.args = {
    label: "Title",
    size:"md"
}

export const textInputlarge = Template.bind({})
textInputlarge.args = {
    label: "Title",
    size:"lg"
}