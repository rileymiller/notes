# 1/30/2020 React Emotion with Justin Seivenpiper

**Author: Riley Miller**

**Lecturer: Justin Seivenpiper**

**Date: 1/30/2020**

### Notes

Build system for front end has gotten more complex. 
- pure stylesheets > preprocessor > css in js
- single file components, combine css/js/html
- separate sources living in different files causes issues
    - hard to maintain, styles are global and create conflicting styles.
    - dump everything in the browser
    

Emotion behind the scene:
```
const ButtonStyled = styled(Button)({
    marginLeft: `${spacing.xs}`
})

const Button = () => <button></button>

// styled component
const MyButton = styled('button)({
    marginLeft: spacing.xs
})

commonStyles = {
    marginLeft: spacing.xs
}

const margin = (amount: number) => ({
    margin: `${amount}px`
})

// func button
const ButtonStyled = styled(Button)({
    ...(margin(10))
})

// es6 spread operator
const myButton = styled(`button`)({
    ...commonStyles
})
```

Styled components inherent components. (Powerful with TypeScript)

One of the objectives of component-based styles is to get rid of cascading styles.

**Emotion doesn't allow you to specify a selector**
Behind the scene: create a dynamic stylesheet

```
<button classname={`ABCD123`}></button>

// emotion class name
emotioncss-ABCD123.css

.ABCD123 {
    margin-left: 4px;
}
```
Process of obfuscation.

### Typing Styled Components
```
type MyButtonProps = {
    big: boolean
}

const ButtonStyled = styled(Button)<MyButtonProps>((props: MyButtonProps) => ({
    ...margin(props.big ? 10 : 4)
}))
```

### Selector use cases
```
const MyButton = styled(`button`)({
    ...commonStyles,

    [MySpan]: {
        fontWeight: `bold`
    },

    // & is the current selector, taken from SASS/LESS preprocessors
    '& > span' : {
        fontWeight: `bold
    }
})
```

### Tagged template literals
Common in GraphQL,

```
styled.div`
    margin-left: ${spacing.xs}
`
==
styled.div(`
    margin-left: $(spacing.xs)
`)

// graphql query
export const pageQuery = graphql`
    query DocPage($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            excerpt
            frontmatter {
                title
                weight
                icon
            }
            headings {
                depth
                value
            }
        }
    }
`;
```

#### String styles vs. Object Styles
- Dealing with strings is gross sometimes
- Object styles are favorable, get type completion for free.
- Easier to deal with objects


