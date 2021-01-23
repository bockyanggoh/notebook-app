package main

import (
	"github.com/gin-gonic/gin"
	"note-backend/api"
	_ "note-backend/api"
)

var (
	API_PREFIX = "/api/v1/notes"
	PORT = ":8080"
)

func main() {
	r := gin.Default()
	r.GET(API_PREFIX + "/:id", api.GetNoteHandler)
	r.GET(API_PREFIX, api.GetNoteListApi)
	r.POST(API_PREFIX, api.CreateNoteApi)
	r.DELETE(API_PREFIX+"/:id", api.DeleteNoteApi)
	r.Run(PORT)

}

