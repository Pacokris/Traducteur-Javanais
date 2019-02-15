import java.util.*;

public class Javanais {

    /* String contenant toutes les voyelles */
	static String voyelle = "aeiouyAEIOUY"; 
	
	/* String contenant toutes les consonnes */
    static String consonne = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ";
    
    /* Vérifie si 'lettre' est une voyelle */
	public static boolean compareVoyelle(char lettre) {
		return (voyelle.indexOf(lettre) != -1);
	}
	
	/* Vérifie si 'lettre' est une consonne */
	public static boolean compareConsonne(char lettre) {
		return (consonne.indexOf(lettre) != -1);
    }
    
    /* Vérifie si la chaine de caractère mot est valide ou non */
	public static boolean motValide(String mot) {
		boolean motValide = true;
		
		for(int i = 0; i < mot.length(); i++) {
			if(!compareVoyelle(mot.charAt(i))) {
				if(!compareConsonne(mot.charAt(i))) {
					motValide = false;
					break;
				}
			}
		}
		return motValide;
	}
}