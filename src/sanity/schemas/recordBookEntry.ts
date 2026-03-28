import { defineField, defineType } from "sanity";

export default defineType({
  name: "recordBookEntry",
  title: "Record Book Entry",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "wrestlerName",
      title: "Wrestler Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: "The record value, e.g. 35-0",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "category",
      wrestlerName: "wrestlerName",
      value: "value",
    },
    prepare({ title, wrestlerName, value }) {
      return {
        title,
        subtitle: `${wrestlerName} | ${value}`,
      };
    },
  },
});
