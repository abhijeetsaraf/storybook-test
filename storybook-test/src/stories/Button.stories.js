import Button from "../components/Button"

export default{
    title: "Components/Button",
    component: Button,
}
//Import the button component in the storybook page
//Export a default object in storybook 

const Template = args => <Button {...args}/>


//Exporting the object is equivalent to variant of a single design element in Figma

//Primary button variants 
//Primary token for active components to be used for primary variants
export const primarySmall = Template.bind({})
primarySmall.args = {
    backgroundColor: "#3F93D3",
    label: "Button",
    size: "sm",
    color: "#ffffff",
    border: "none",
}

export const primaryMedium = Template.bind({})
primaryMedium.args = {
    backgroundColor: "#3F93D3",
    label: "Button",
    size: "md",
    color: "#ffffff",
    border: "none",
}

export const primaryLarge = Template.bind({})
primaryLarge.args = {
    backgroundColor: "#3F93D3",
    label: "Button",
    size: "lg",
    color: "#ffffff",
    border: "none",
}

//Secondary button variants
//Secondary/Inactive token to be used for secondary variants

export const secondarySmall = Template.bind({})
secondarySmall.args = {
    backgroundColor: "#ffffff",
    label: "Button",
    size: "sm",
    color: "#3F93D3",
    border: "solid #3f93d3",
}

export const secondaryMedium = Template.bind({})
secondaryMedium.args = {
    backgroundColor: "#ffffff",
    label: "Button",
    size: "md",
    color: "#3F93D3",
    border: "solid #3f93d3",
}

export const secondaryLarge = Template.bind({})
secondaryLarge.args = {
    backgroundColor: "#ffffff",
    label: "Button",
    size: "lg",
    color: "#3F93D3",
    border: "solid #3f93d3",
}
