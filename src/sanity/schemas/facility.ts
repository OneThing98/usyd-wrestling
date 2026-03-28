import { defineField, defineType } from "sanity";

export default defineType({
  name: "facility",
  title: "Facility",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mapUrl",
      title: "Map URL",
      type: "url",
    }),
    defineField({
      name: "capacity",
      title: "Capacity",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
