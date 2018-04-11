// Imports
// Sample patterns:
import * from 'libraryName'; // import all from x;
import { SpecificLibraryObject } from 'filepath/LibraryName'; // import 1 from x;
import { objectA, objectB } from 'filepath/LibraryName'; // import 2 from x;
// Real examples:
import * from 'rxjs';
import observable from 'rxjs/observable'

//Exports
export class SampleClass {
	sampleMethod(aStr: string): number {
		return aStr.length()
	}
} // Export a class inline.
// Alternative
class SampleClass {
	sampleMethod(aStr: string): number {
		return aStr.length()
	}
}
export { SampleClass as NewClassName } // Export a class with a different name.
// Alternative
class SampleClassA {
	sampleMethod(aStr: string): number {
		return aStr.length()
	}
}
class SampleClassB {
	sampleMethod(aStr: string): number {
		return aStr.length()
	}
}
export { SampleClassA, SampleClassB } // Export 2 Classes.