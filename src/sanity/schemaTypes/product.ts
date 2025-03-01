import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"id",
            type:"string",
            title: "Product Id"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name:"description",
            validation: (rule) => rule.required(),
            title: "Description",
            type: "string"
        },
        {
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name:"discountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        },
    ]
})