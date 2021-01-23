package api

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetNoteHandler(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{"data": "placeholder"})
}

func CreateNoteApi(context *gin.Context) {
	context.JSON(http.StatusCreated, gin.H{"data": "created"})
}

func UpdateNoteApi(context *gin.Context) {

}

func DeleteNoteApi(context *gin.Context) {

}

func GetNoteListApi(context *gin.Context) {

}


