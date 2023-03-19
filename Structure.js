userRoles = [
    {
      _id: "obj id",
      userRoleValue: "Admin",
      userRolePermissions: [],
      availableUsers: []
    }
  ]
  
  finalProjectAssignments = [
    {
      userId: "user id from user table",
      projectDescription: " ",
      projectGivenBy: "",
      projectGivenOn: "date of project assigned",
      projScore: 23,
      feedback: "Gooooooooooosssood",
      gradedOn: "date",
      gradedby: "id from users collection",
      submittedDate: "29-03-2023",
      submissionFile: "example.zip",
      status: true, //graded,
    }
  ]
  
  guidanceRequestTickets = [
    {
      _id: "id",
      requestedBy: "",
      requestTitle: "",
      description: "",
      attachment: "",
      createdTime: "",
      status: "requested/directed/completed",
      isAssigned: true,
      assignedTo: "user id",
      directedBy: "user id",
      directedDepartmentID: "dep id"
    }
  ]
  
  users = [
    {
      _id: 1111111111,
      userRoleId: "",
      empId: "205083S",
      firstName: "Ava",
      lastName: "Carol",
      gender: "Male",
      dob: "20-12-2000",
      phoneNumber: "0772116778",
      emailAddress: "ava@intervest.com",
      department: "id from departments collection",
      jobPosition: "id from jobTitle collection",
      verified: false,
      dataCollected: true,
      userStatus: true,
      isVerified: true,
      isUserCompleted: true,
      badges: [
        {
          _id: "",
          badgeValue: "",
          earnedOn: ""
        }
      ],
      earnedScoresByQuiz: {
        numOfQuizzesDone: 8,
        totalScoresEarned: 650
      }, //from this we can find average and list the leader board
    },
  ]
  
  editLogs = [
    {
      editBelongsTo: "department",
      reasonID: "",
      reasonValue: "",
      modifiedBy: "",
      fromName: "",
      toName: ""
    }
  ]
  
  deleteLogs = [
    {
      belongsTo: "chapter",
      reasonID: "",
      reasonValue: "",
      tempDeletedBy: "",
    }
  ]
  
  quizSubmissions = [
    {
      _id: "objId",
      quizBelongsToDepartmet: "",
      chapterId: "",
      unitId: "",
      userID: "205080K",
      score: 34,
      attemptedTime: "date",
      submittedTime: "date",
      questions: [
        {
          questionValue: "",
          answers: [],
          correctAnswer: 2,//index
          submittedAnswer: 3
        }
      ]
    },
  ]
  
  KTSessions = [
    {
      _id: "obj id",
      belongsToUnit: "unit id",
      belongsToChapter: "chapter id",
      sessionName: "HTML Basics",
      sessionDesc: {
        text: "HTML is a markup language",
        video: "https://www.youtube.com/watch?v=FLvxuM1_rDk",
        audio: "https://www.youtube.com/watch?v=FLvxuM1_rDk",
      },
      createdBy: "id from users collection",
      createdOn: "date",
      overallRating: 4,
      overallQuality: 4,
      overallComm: 4,
      overallClarity: 4,
      overallKnowledgeAndSkill: 4,
      ratings: [
        {
          userId: "21414",
          ratedOn: "date",
          qualityRate: 4,
          commRate: 4,
          clarityRate: 4,
          knowledgeAndSkillRate: 4,
        },
      ],
      comments: [
        {
          _id: "object id",
          addedBy: "userId",
          comment: "This is a comment",
          commentedOn: "date",
          replies: [
            {
              _id: "obj id",
              addedBy: "userId",
              reply: "This is a reply",
              repliedOn: "date",
            },
          ]
        },
      ]
    },
  ]
  
  Units = [
    {
      _id: "id234556657568",
      belongsToChapter: "id from chapter collection",
      unitName: "HTML",
      unitDesc: "HTML is a markup language",
      createdBy: "id from users collection",
      createdOn: "date",
      status: "Active",
      ktSessions: ["ktsession id 1", "kt session id 2"],
      quiz: {
        _id: "id234556657568",
        quizName: "HTML Basics",
        questions: [
          {
            _id: 1,
            question: "What is HTML?",
            createdBy: "id from users collection",
            createdOn: "date",
            options: [
              "A markup language",
              "A programming language",
              "A database language",
              "A scripting language",
            ],
            correctAnswer: 1, //index
          },
        ],
      },
    },
  ]
  
  Articles = [
    {
      _id: "id2354656657568",
      belongsToChapter: "chapter id",
      articleName: "HTML Basics",
      articleDesc: "HTML is a markup language",
      createdBy: "id from users collection",
      createdOn: "date",
      files: ["URL1", "URL2", "URL3"],
      overallRating: 4,
      overallQuality: 4,
      overallComm: 4,
      overallClarity: 4,
      overallKnowledgeAndSkill: 4,
      ratings: [
        {
          _id: "id from users collection",
          ratedOn: "date",
          qualityRate: 4,
          commRate: 4,
          clarityRate: 4,
          knowledgeAndSkillRate: 4,
        },
      ],
      comments: [
        {
          _id: "object id",
          addedBy: "userId",
          comment: "This is a comment",
          commentedOn: "date",
          replies: [
            {
              _id: "obj id",
              addedBy: "userId",
              reply: "This is a reply",
              repliedOn: "date",
            },
          ]
        },
      ]
    }
  ]
  
  discussionForums = [
    {
      _id: "id234556657568",
      belongsToChapter: "",
      topic: "Ways to add css to html",
      description: "There are many ways to add css to html",
      createdBy: "id from users collection",
      createdOn: "date",
      status: "Active/Locked",
      attachmentAllowed: true,
      posts: [
        {
          _id: "id234556657568",
          description: "Inline CSS is the best way to add css to html",
          createdBy: "id from users collection",
          createdOn: "date",
          attachment: "URL1",
          replies: [
            {
              _id: "id234556657568",
              description:
                "Yes, But using external css is the best way to add css to html",
              attachment: "",
              createdBy: "id from users collection",
              createdOn: "date",
            },
            {
              _id: "id23455667568",
              description:
                "If you want to override external css, then inline css is the best way to add css to html",
              attachment: "",
              createdBy: "id from users collection",
              createdOn: "date",
            },
          ],
        },
      ],
    },
  ]
  
  chapters = [
    {
      _id: "id23455637645",
      chapterBelongsToDepartment: "",
      chapterName: "Web Development",
      chapterStatus: "true or false",
      createdBy: "id from users collection",
      offeredInJobTitles: ["jtId", "jtId"],
      createdOn: "date",
      status: "Active",
      unitsOffer: ["unit id 1", "unit id 2", "unit id 3"],
      articlesOffer: ["article id 1", "article id 2"],
      discussionForums: ["dis for id 1", "dis for id 2"],
    },
  ]
  
  departments = [
    {
      _id: 1222222222,
      depName: "IT",
      createdOn: "date",
      createdBy: "id from users collection",
      jobTitles: [
        {
          _id: "32423545",
          jobTitle: "Intern Software Engineer",
          status: "Active",
          createdBy: "id from users collection",
          createdOn: "date",
          chaptersAllocated: ["chapId", "chapId", "chapId"],
        },
      ],
      chaptersOffer: ["cha id 1", "cha id 2", "cha id 3"]
    }
  ]