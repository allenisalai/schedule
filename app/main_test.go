package main

import "testing"

func TestSum(t *testing.T) {
	t.Run("Testing sum", func(t *testing.T) {
		a := 1
		b := 4
		if Sum(a, b) != 5 {
			t.Error("Sum failed")
		}
	})
}
