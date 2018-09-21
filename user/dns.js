|LF_DNS|

//**NOTE that this will check ALL checkboxes in the form.
function selectAllDNS()
{
	with (document.tableform)
	{
		var check = false;
		var i=0;

		for (i=0; i < elements.length; i++)
			if (elements[i].type == 'checkbox')
			{
				check = !(elements[i].checked);	break;
			}

		for (i=0; i < elements.length; i++)
			if (elements[i].type == 'checkbox')
					elements[i].checked = check;
	}
}

function set_span(id_tag, value)
{
	var span = document.getElementById(id_tag);
	while (span.firstChild) {
		span.removeChild(span.firstChild);
	}
	span.appendChild(document.createTextNode(value));
	
	var true_values_tr = document.getElementById('true_values_tr');
	true_values_tr.style.display = '';
}
function set_error(str, id_tag)
{
	var span = document.getElementById(id_tag);
	//span.style.color = "#990000";
	//span.style.fontWeight = 'bold';
	span.classList.add("highlighted-bad");
	
	set_span(id_tag, str);
}
function set_text(str, id_tag)
{
	var span = document.getElementById(id_tag);
	//span.style.color = "#000000";
	//span.style.fontWeight = 'normal';
	span.classList.remove("highlighted-bad");

	set_span(id_tag, str);
}
function set_effective_value(value, domain, id_tag, check_contains_domain = true)
{
	if (value == '') {
		return set_text('', id_tag);
	}
	if (value == '@') {
		return set_text(domain+'.', id_tag);
	}

	var domain_dot = domain+".";

	if (value.endsWith("."))
	{
		if (check_contains_domain && value != domain_dot && !value.endsWith('.'+domain_dot)) {
			return set_error("|LANG_DOT_END_SHOULD_HAVE_ZONE|", id_tag);
		}	
		return set_text(value, id_tag);
	}
	else
	{
		if (check_contains_domain && value.endsWith(domain)) {
			return set_error('"'+value+'.'+domain_dot+'" - |LANG_MISSING_END_DOT|', id_tag);
		}
	}
	return set_text(value+'.'+domain_dot, id_tag);
}

function host_changed_right(value)
{
	set_effective_value(value,'|domain|', 'dns_right', false)
}
function host_changed_left(value)
{
	set_effective_value(value,'|domain|', 'dns_left')
}
function is_ipv4(ip) 
{
	var chunks = ip.split('.');
	if (chunks.length != 4) { console.log('need 4 chunks'); return false; }
	var c = 0;
	var n = 0;
	for (var i = 0; i<chunks.length; ++i) {
		c = chunks[i];
		if (isNaN(c)) { console.log('"'+c+'" is not a number'); return false; }
		n = Number(c);
		if (!Number.isInteger(n)) { console.log('"'+n+'" is not an integer'); return false; }
		if (i == 0 && n == 0) { console.log('first chunk '+n+' is 0'); return false; }
		if (n < 0 || n > 255) { console.log('"'+n+"\" is out of range"); return false; }
	}
	return true;
}
function ensure_is_ipv4(value)
{
	if (value != '' && !is_ipv4(value)) {
		set_error("|LANG_A_RECORD_VALUE_NOT_IP|", 'dns_right');
	} else {
		set_text('', 'dns_right');
	}
}
