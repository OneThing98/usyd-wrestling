import { defineField, defineType } from "sanity";

export default defineType({
  name: "supportStaff",
  title: "Support Staff",
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
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail Photo",
      description:
        "Small square photo shown on the coaches listing page. Ideally a headshot.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "photo",
      title: "Main Photo",
      description: "Primary photo shown at the top of the bio page.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Bio Photos",
      description: "Photos displayed on the full bio page.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo",
    },
  },
});
