Dim classeur
Dim FSO, FLD, FIL
Dim remplacer


'On demande à l'utilisateur comment il souhaite nommer son nouveau fichier 
classeur = InputBox("Comment souhaitez-vous nommer le nouveau classeur ?", "Classeur", "")



'On vérifie si le nom entré est vide
If classeur <> empty Then

	'On ajoute l'extension .xlsm au nom entré pour le fichier
	classeur = classeur & ".xlsm"

	Set FSO = CreateObject("Scripting.FileSystemObject")
	
	set FLD = FSO.GetFolder("Classeurs")
	
	'On parcourt le dossier et on avertit si le nom entré existe déja******************************************************************************************************************
	For Each Fil In FLD.Files

		'Si le nom entré existe déja, on demande à l'utilisateur s'il veut le remplacer
		If FIL.name = classeur Then
			remplacer = msgbox ("Le classeur " & classeur & " existe d" & chr(233)& "ja, souhaitez-vous le remplacer ?", vbYesNo , "Attention")
			'Si Oui, on lance la fonction pour créer le classeur
			if remplacer = vbYes Then 
				CreerFichier classeur
				wscript.quit
			end if
			'Si Non, on affiche un message d'annulation et on quitte le script	
			if remplacer = vbNo Then
				msgbox "Op"& chr(233)&"ration annul"& chr(233)&"e"
				wscript.quit
			end if
		end if

	Next
	'**********************************************************************************************************************************************************************************
	CreerFichier classeur
Else
	MsgBox("Ne pas mettre un nom vide") 'Message d'erreur si rien n'a été entré
End If

'////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Function CreerFichier(classeur)

	'Copie du fichier source avec le nom entré précedemment*********************************************************************************
	Set fso = WScript.CreateObject("Scripting.FileSystemObject")
	fso.CopyFile "Modele!!!\OC.xlsm", "Classeurs\" & classeur
	MsgBox("Le fichier " & classeur & " a bien " & chr(233)& "t" & chr(233)& " cr" & chr(233)& chr(233)& ".") 'Message de validation
	'**************************************************************************************************************************************

End function
