import Stack from "../components/Stack";

export default{
    title: "Components/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: {type: "number", defaultValue:5}
    }, 
}

const Template = ({numberOfChildren, ...args}) => (
    <Stack {...args}> 
        {[...Array(numberOfChildren).keys()].map( n => (
            <div style={
                {
                    width:"50px",
                    height:"50px",
                    backgroundColor:"#3F93D3",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",    
                }}>
                {n+1}
            </div>
        ))}
    </Stack>)

export const HorizontalStack = Template.bind({})
HorizontalStack.args = { 
    direction: "row",
    spacing:2,
    wrap:false,
}

export const VerticalStack = Template.bind({})
VerticalStack.args = { 
    direction: "column",
    spacing:2,
    wrap:false,
}