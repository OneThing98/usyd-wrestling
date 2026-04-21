import { defineField, defineType } from "sanity";

export default defineType({
  name: "timetable",
  title: "Timetable",
  type: "document",
  fields: [
    defineField({
      name: "days",
      title: "Days",
      type: "array",
      of: [
        {
          type: "object",
          name: "timetableDay",
          title: "Day",
          fields: [
            defineField({
              name: "day",
              title: "Day",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "sessions",
              title: "Sessions",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "timetableSession",
                  title: "Session",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Name",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "time",
                      title: "Time",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "location",
                      title: "Location",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: "name",
                      subtitle: "time",
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: "day",
            },
          },
        },
      ],
    }),
    defineField({
      name: "note",
      title: "Note",
      type: "string",
      description: "Small note displayed below the title",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Training Timetable" };
    },
  },
});
