        function removeMatchingText() {
            var temp = 1
            if(temp == 1){}
            var inputString = document.getElementById("inputString").value;
            var re = /^[0-9]* /gm; // 複数行対応の正規表現
            var resultString = inputString.replace(re, "");
            document.getElementById("outputString").value = resultString;
        }
