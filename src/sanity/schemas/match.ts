import { defineField, defineType } from "sanity";

export default defineType({
  name: "match",
  title: "Match",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
    }),
    defineField({
      name: "season",
      title: "Season",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "opponent",
      title: "Opponent",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "opponentLogo",
      title: "Opponent Logo",
      type: "image",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "homeAway",
      title: "Home / Away",
      type: "string",
      options: {
        list: ["home", "away", "neutral"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "string",
      options: {
        list: ["W", "L", "D"],
      },
    }),
    defineField({
      name: "score",
      title: "Score",
      type: "string",
      description: "e.g. 28-12",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        defineField({
          name: "video",
          title: "Video",
          type: "url",
        }),
        defineField({
          name: "stats",
          title: "Stats",
          type: "url",
        }),
        defineField({
          name: "recap",
          title: "Recap",
          type: "url",
        }),
        defineField({
          name: "tickets",
          title: "Tickets",
          type: "url",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "opponent",
      date: "date",
      result: "result",
      score: "score",
    },
    prepare({ title, date, result, score }) {
      return {
        title,
        subtitle: `${date} | ${result || ""} ${score || ""}`.trim(),
      };
    },
  },
  orderings: [
    {
      title: "Date Descending",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
