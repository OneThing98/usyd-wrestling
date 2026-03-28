import { defineField, defineType } from "sanity";

export default defineType({
  name: "wrestler",
  title: "Wrestler",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weightClass",
      title: "Weight Class",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      options: {
        list: [
          "Freshman",
          "Sophomore",
          "Junior",
          "Senior",
          "Graduate Student",
          "Redshirt Freshman",
          "Redshirt Sophomore",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hometown",
      title: "Hometown",
      type: "string",
    }),
    defineField({
      name: "highSchool",
      title: "High School",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "record",
      title: "Record",
      type: "string",
      description: "e.g. 22-3",
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({
          name: "twitter",
          title: "Twitter",
          type: "url",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
        }),
        defineField({
          name: "nilProfile",
          title: "NIL Profile",
          type: "url",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      weightClass: "weightClass",
      year: "year",
      media: "photo",
    },
    prepare({ title, weightClass, year, media }) {
      return {
        title,
        subtitle: `${weightClass} | ${year}`,
        media,
      };
    },
  },
});
