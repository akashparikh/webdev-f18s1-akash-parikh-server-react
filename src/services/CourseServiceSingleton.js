import widgets from "../reducers/widgets";

let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1',
                lessons: [
                    {
                        title: 'Lesson 1',
                        topics: [
                            {
                                id: '123',
                                title: 'topic 1',
                                widgets: [
                                    {
                                        id: '456',
                                        title: 'list 1',
                                        type: 'LIST',
                                        options: 'option 1\noption 2\noption 3'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '234',
                                        title: 'widget 2',
                                        type: 'HEADING',
                                        size: 2,
                                        text: 'Heading 2'
                                    },
                                    {
                                        id: '345',
                                        title: 'widget 3',
                                        type: 'HEADING',
                                        size: 3,
                                        text: 'Heading 3'
                                    }
                                ]
                            },
                            {
                                id: '234',
                                title: 'topic 2',
                                widgets: [
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Lesson 2',
                        topics: [
                            {
                                title: 'topic a',
                                widgets: [
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    }
                                ]
                            },
                            {
                                title: 'topic b',
                                widgets: [
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    }
                                ]
                            },
                            {
                                title: 'topic c',
                                widgets: [
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A',
                        topics: [
                            {
                                title: 'topic c',
                                widgets: [
                                    {
                                        id: '123',
                                        title: "widget 1",
                                        type: 'LIST',
                                        size: 1,
                                        text: 'Heading 1',
                                        name:"Default",
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: "3",
                                        text: "Heading 1"
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'LINK',
                                        size: 1,
                                        text: 'Heading 1'
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        title: 'Lesson B',
                        topics: [
                            {
                                title: 'topic c',
                                widgets: [
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Lesson C',
                        topics: [
                            {
                                title: 'topic c',
                                widgets: [
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Week 3',
                lessons: [{
                    title : 'Lesson 1',
                    topics: [
                        {
                            title: 'topic c',
                            widgets: [
                                {
                                    id: '123',
                                    title: 'widget 1',
                                    type: 'HEADING',
                                    size: 1,
                                    text: 'Heading 1'
                                },
                                {
                                    id: '123',
                                    title: 'widget 1',
                                    type: 'HEADING',
                                    size: 1,
                                    text: 'Heading 1'
                                },
                                {
                                    id: '123',
                                    title: 'widget 1',
                                    type: 'HEADING',
                                    size: 1,
                                    text: 'Heading 1'
                                }
                            ]
                        }
                    ]
                }]
            }
        ]
    },

]

export default class CourseServiceSingleton {

    static updateWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = forWidget;
                        }
                    }
                }
            }
        }
    }
    static findWidgetsForTopic = forTopic => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            return courses[c].modules[m].lessons[l].topics[t].widgets
                        }
                    }
                }
            }
        }
    }

    static findAllCourses = () =>
        courses
    static createCourse = course =>
        courses.push(course)
    static deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
        )
    static deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }

    static addModule = module => {
        courses = courses.map(course => {
            course.modules.push(module)
            return course;
        })
    }

    static deleteWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                        }
                    }
                }
            }
        }
    }

    static createWidget = (forTopic) =>  {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        console.log(courses[c].modules[m].lessons[l].topics[t].widgets)
                        courses[c].modules[m].lessons[l].topics[t].widgets.push({
                                id: (new Date()).getTime()+'',
                                title: 'widget 1',
                                type: 'HEADING',
                                size: 1,
                                text: 'Heading 1'
                            });
                    }
                }
            }
        }
    }

    static moveUp = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id)
                        {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            let temp=courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex];
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] =
                                courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex - 1];
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex - 1] = temp;
                        }
                    }
                }
            }
        }
    }

    static moveDown = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id)
                        {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            let temp=courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex];
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] =
                                courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex + 1];
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex + 1] = temp;
                        }
                    }
                }
            }
        }
    }



}