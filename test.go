package main

import (
	"fmt"
)

func main() {
	var arr = [4]int{1, 3, 4}

	for i, k := range arr {

		fmt.Println("value as", i, k)

	}
}
